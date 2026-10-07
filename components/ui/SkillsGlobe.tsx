"use client";

/**
 * SkillsGlobe — globo 3D de skills (inspirado no "Skills.json" de abdulmomin.dev)
 *
 * Mesma stack que ele usou:
 *   npm i three @react-three/fiber @react-three/drei devicon
 *   npm i -D @types/three
 *
 * No app/layout.tsx (ícones do Devicon):
 *   import "devicon/devicon.min.css";
 *
 * Uso:
 *   <SkillsGlobe />                         // lista padrão
 *   <SkillsGlobe skills={mySkills} accent="#7c3aed" height={520} />
 *
 * Diferença p/ o original: ele usa um <Html> do drei por ícone. A partir do
 * @react-three/fiber 9.8 isso faz o 1º ícone não aparecer, então aqui os ícones
 * ficam numa única camada HTML reposicionada a cada frame (mesmo visual, sem o bug).
 */

import { useLayoutEffect, useMemo, useRef, type CSSProperties, type RefObject } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";

export type Skill = {
  /** classe do Devicon, ex.: "devicon-react-original" (https://devicon.dev) */
  icon: string;
  label: string;
  /** sobrescreve a cor da marca (útil p/ ícones pretos em fundo escuro) */
  color?: string;
};

type Props = {
  skills?: Skill[];
  /** cor da grade, do brilho e do hover */
  accent?: string;
  /** raio da esfera onde ficam os ícones */
  radius?: number;
  height?: number | string;
  /** cor da névoa — use a mesma do fundo da página */
  fogColor?: string;
  className?: string;
  style?: CSSProperties;
};

const DEFAULT_SKILLS: Skill[] = [
  { icon: "devicon-react-original", label: "React" },
  { icon: "devicon-nextjs-plain", label: "Next.js", color: "#fff" },
  { icon: "devicon-typescript-plain", label: "TypeScript" },
  { icon: "devicon-javascript-plain", label: "JavaScript" },
  { icon: "devicon-nodejs-plain", label: "Node.js" },
  { icon: "devicon-nestjs-plain", label: "NestJS" },
  { icon: "devicon-tailwindcss-original", label: "Tailwind" },
  { icon: "devicon-html5-plain", label: "HTML5" },
  { icon: "devicon-css3-plain", label: "CSS3" },
  { icon: "devicon-vuejs-plain", label: "Vue.js" },
  { icon: "devicon-angularjs-plain", label: "Angular" },
  { icon: "devicon-svelte-plain", label: "Svelte" },
  { icon: "devicon-vitejs-plain", label: "Vite" },
  { icon: "devicon-redux-original", label: "Redux" },
  { icon: "devicon-graphql-plain", label: "GraphQL" },
  { icon: "devicon-prisma-original", label: "Prisma", color: "#fff" },
  { icon: "devicon-postgresql-plain", label: "PostgreSQL" },
  { icon: "devicon-mysql-plain", label: "MySQL" },
  { icon: "devicon-mongodb-plain", label: "MongoDB" },
  { icon: "devicon-redis-plain", label: "Redis" },
  { icon: "devicon-supabase-plain", label: "Supabase" },
  { icon: "devicon-firebase-plain", label: "Firebase" },
  { icon: "devicon-docker-plain", label: "Docker" },
  { icon: "devicon-kubernetes-plain", label: "Kubernetes" },
  { icon: "devicon-amazonwebservices-plain-wordmark", label: "AWS" },
  { icon: "devicon-googlecloud-plain", label: "GCP" },
  { icon: "devicon-azure-plain", label: "Azure" },
  { icon: "devicon-git-plain", label: "Git" },
  { icon: "devicon-github-original", label: "GitHub", color: "#fff" },
  { icon: "devicon-python-plain", label: "Python" },
  { icon: "devicon-java-plain", label: "Java" },
  { icon: "devicon-go-plain", label: "Go" },
  { icon: "devicon-figma-plain", label: "Figma" },
  { icon: "devicon-jest-plain", label: "Jest" },
  { icon: "devicon-linux-plain", label: "Linux", color: "#fff" },
];

/** N pontos bem distribuídos numa esfera (espiral de Fibonacci) — funciona p/ qualquer quantidade */
function fibonacciSphere(n: number, radius: number) {
  const golden = Math.PI * (3 - Math.sqrt(5));
  return Array.from({ length: n }, (_, i) => {
    const y = 1 - (2 * (i + 0.5)) / n;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    return new THREE.Vector3(Math.cos(theta) * r, y, Math.sin(theta) * r).multiplyScalar(radius);
  });
}

const ICON_PX = 64; // tamanho do ícone no CSS
const ICON_WORLD = 0.5; // tamanho do ícone na cena 3D

const _world = new THREE.Vector3();
const _dir = new THREE.Vector3();
const _camDir = new THREE.Vector3();
const _ndc = new THREE.Vector3();
const _view = new THREE.Vector3();

function Globe({
  count,
  radius,
  accent,
  items,
}: {
  count: number;
  radius: number;
  accent: string;
  items: RefObject<(HTMLDivElement | null)[]>;
}) {
  const group = useRef<THREE.Group>(null);
  const points = useMemo(() => fibonacciSphere(count, radius), [count, radius]);
  const shell = radius * 0.85;

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    const camera = state.camera as THREE.PerspectiveCamera;
    const { width, height } = state.size;

    g.rotation.y += delta * 0.06; // giro lento, independente do FPS
    g.updateWorldMatrix(true, false);
    camera.updateMatrixWorld();
    _camDir.copy(camera.position).normalize();
    const tanHalfFov = Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2);

    // Projeta cada ponto 3D p/ a tela e move o ícone HTML (direto no DOM, sem re-render)
    points.forEach((p, i) => {
      const el = items.current[i];
      if (!el) return;
      _world.copy(p).applyMatrix4(g.matrixWorld);

      // 1 = de frente p/ câmera, 0 = atrás do globo → ícones de trás somem
      const t = THREE.MathUtils.clamp((_dir.copy(_world).normalize().dot(_camDir) - 0.1) * 2, 0, 1);

      _ndc.copy(_world).project(camera);
      const x = (_ndc.x + 1) * 0.5 * width;
      const y = (1 - _ndc.y) * 0.5 * height;
      const depth = -_view.copy(_world).applyMatrix4(camera.matrixWorldInverse).z;
      const pxPerUnit = height / (2 * tanHalfFov * depth); // perspectiva: longe = menor
      const scale = ((ICON_WORLD * pxPerUnit) / ICON_PX) * (0.8 + 0.4 * t);

      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${scale})`;
      el.style.opacity = String(t);
      el.style.zIndex = String(Math.round(t * 100));
      el.style.pointerEvents = t > 0.8 ? "auto" : "none";
    });
  });

  return (
    <group ref={group}>
      {/* grade: frente mais visível, fundo bem fraco */}
      <mesh>
        <icosahedronGeometry args={[shell, 2]} />
        <meshBasicMaterial color={accent} wireframe transparent opacity={0.08} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[shell, 2]} />
        <meshBasicMaterial color={accent} wireframe transparent opacity={0.02} side={THREE.BackSide} />
      </mesh>
      {/* núcleo escuro */}
      <mesh>
        <sphereGeometry args={[shell * 0.98, 32, 32]} />
        <meshBasicMaterial color="#000" transparent opacity={0.2} side={THREE.DoubleSide} />
      </mesh>
      {/* halo (blending aditivo) */}
      <mesh>
        <sphereGeometry args={[shell * 1.035, 32, 32]} />
        <meshBasicMaterial
          color={accent}
          transparent
          opacity={0.05}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}

/** Afasta a câmera o suficiente p/ o globo caber (inclusive em telas estreitas) */
function FitCamera({ radius }: { radius: number }) {
  const camera = useThree((s) => s.camera) as THREE.PerspectiveCamera;
  const aspect = useThree((s) => s.size.width / s.size.height);

  useLayoutEffect(() => {
    const vFov = THREE.MathUtils.degToRad(camera.fov);
    const hFov = 2 * Math.atan(Math.tan(vFov / 2) * aspect);
    camera.position.setLength(radius / Math.sin(Math.min(vFov, hFov) / 2));
  }, [camera, aspect, radius]);

  return null;
}

const CSS = `
.skills-globe{position:relative;width:100%;overflow:hidden;cursor:grab}
.skills-globe:active{cursor:grabbing}
.skills-globe__layer{position:absolute;inset:0;pointer-events:none}
.skills-globe__item{position:absolute;left:0;top:0;opacity:0;display:flex;flex-direction:column;align-items:center;gap:8px;padding:6px;user-select:none;cursor:pointer}
.skills-globe__item i{font-size:${ICON_PX}px;line-height:1;transition:transform .3s,filter .3s}
.skills-globe__item span{font:700 12px/1 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;white-space:nowrap;color:#9ca3af;opacity:.8;transition:color .3s,opacity .3s}
.skills-globe__item:hover i{transform:scale(1.12);filter:drop-shadow(0 0 14px var(--globe-accent))}
.skills-globe__item:hover span{color:var(--globe-accent);opacity:1}
`;

export default function SkillsGlobe({
  skills = DEFAULT_SKILLS,
  accent = "#e65320",
  radius = 3.3,
  height = 600,
  fogColor = "#111111",
  className,
  style,
}: Props) {
  const container = useRef<HTMLDivElement>(null!);
  const items = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <div
      ref={container}
      className={["skills-globe", className].filter(Boolean).join(" ")}
      style={{ height, ...({ "--globe-accent": accent } as CSSProperties), ...style }}
    >
      <style>{CSS}</style>

      {/* eventSource = container → arrastar em cima de um ícone também gira o globo */}
      <Canvas eventSource={container} camera={{ position: [0, 0, 9], fov: 50 }} dpr={[1, 1.5]}>
        <fog attach="fog" args={[fogColor, 10, 25]} />
        <FitCamera radius={radius * 1.2} />
        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
          <Globe count={skills.length} radius={radius} accent={accent} items={items} />
        </Float>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>

      <div className="skills-globe__layer">
        {skills.map((skill, i) => (
          <div
            key={`${skill.label}-${i}`}
            ref={(el) => {
              items.current[i] = el;
            }}
            className="skills-globe__item"
          >
            <i className={`${skill.icon} colored`} style={skill.color ? { color: skill.color } : undefined} />
            <span>{skill.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}