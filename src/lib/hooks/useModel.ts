// src/lib/hooks/useModel.ts
'use client';

import { useGLTF } from '@react-three/drei';
import { useEffect, useState } from 'react';
import { GLTF } from 'three-stdlib';
import * as THREE from 'three';

type GLTFResult = GLTF & {
  nodes: {
    [key: string]: THREE.Mesh;
  };
  materials: {
    [key: string]: THREE.Material;
  };
};

export function useModel(path: string) {
  const [isLoaded, setIsLoaded] = useState(false);
  const gltf = useGLTF(path) as GLTFResult;

  useEffect(() => {
    useGLTF.preload(path);
    setIsLoaded(true);
    
    return () => {
      // Clean up materials and geometries
      Object.values(gltf.materials).forEach(material => material.dispose());
      Object.values(gltf.nodes).forEach(mesh => {
        if (mesh.geometry) mesh.geometry.dispose();
        if (mesh.material) {
          const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
          materials.forEach(material => material.dispose());
        }
      });
    };
  }, [path, gltf]);

  return { gltf, isLoaded };
}