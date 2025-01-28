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
    if (gltf) {
      setIsLoaded(true);
    }
    return () => {
      if (gltf) {
        useGLTF.preload(path);
      }
    };
  }, [gltf, path]);

  return { gltf, isLoaded };
}