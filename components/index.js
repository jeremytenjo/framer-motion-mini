import React from 'react';
import { motion } from 'framer-motion';

export * from './options-menu';
export * from './icons';

export const Reload = () => (
  <div className="reload">
    <motion.button onClick={() => location.reload()} whileTap={{ scale: 0.9 }}>
      reload
    </motion.button>
  </div>
);
