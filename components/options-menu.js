import React from 'react';
import * as Menu from '@radix-ui/react-dropdown-menu';
import { AnimatePresence, motion } from 'framer-motion';
import { moreIcon } from './icons';

export const OptionsMenu = ({ feature, onComplete }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Menu.Root open={open} onOpenChange={setOpen}>
      <Menu.Trigger className="menu-trigger">{moreIcon}</Menu.Trigger>
      <AnimatePresence>
        {open && (
          <Menu.Content
            className="menu-content"
            align="end"
            as={motion.div}
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 0.2 } }}
            exit={{ scale: 0, transition: { duration: 0.1 } }}
            style={{ transformOrigin: 'top right' }}
            forceMount={true}
          >
            <Menu.Item className="menu-item">Edit</Menu.Item>
            <Menu.Item
              className="menu-item"
              onSelect={() => onComplete(feature.id)}
            >
              Mark as Completed
            </Menu.Item>
            <Menu.Item className="menu-item">Delete</Menu.Item>
          </Menu.Content>
        )}
      </AnimatePresence>
    </Menu.Root>
  );
};
