import React from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas} from '@react-three/fiber';
import {useMediaQuery} from "react-responsive"  
import Particles from './Particles';
const HeroExperience = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
    return (
        <Canvas
            //prop to make the canvas non-interactive on mobile
            style={{ pointerEvents: isMobile ? 'none' : 'auto' }}
            camera={{ position: [0, 0, 15], fov: 45 }}
        >

            <ambientLight intensity={0.2} color="#1a1a40" />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <OrbitControls
                enabled={!isMobile}
                enablePan={false}
                enableZoom={!isTablet}
                maxDistance={20}
                minDistance={5}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />
            <Particles />
            {/*
            <mesh>
                <boxGeometry args={[2,2,2]}/>
                <meshStandardMaterial color="blue"/>
            </mesh>  */}
        </Canvas>
    )
}

export default HeroExperience
