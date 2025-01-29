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
      useGLTF.dispose(path);
    };
  }, [path]);

  return { gltf, isLoaded };
}