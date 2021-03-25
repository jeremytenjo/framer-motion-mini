import React from 'react';
import { Reload, upvoteIcon, OptionsMenu } from '../components';
import { AnimatePresence, motion } from 'framer-motion';

const featureList = [
  { id: 1, name: 'Edit tweets', votes: 0 },
  { id: 2, name: 'Get rid of hashtags', votes: 0 },
  { id: 3, name: 'Longer tweets', votes: 0 },
  { id: 4, name: 'Make search useful', votes: 0 },
  { id: 5, name: 'Alt text for video and GIFs', votes: 0 },
  { id: 6, name: 'Hide follower count', votes: 0 },
  { id: 7, name: 'Search in DMs', votes: 0 },
];

export default function Home() {
  const [features, setFeatures] = React.useState(featureList);
  const onUpvote = (id) => {
    setFeatures(
      features.map((feature) => {
        if (feature.id === id) feature.votes++;
        return feature;
      })
    );
  };
  const onComplete = (id) => {
    setFeatures(
      features.map((feature) => {
        if (feature.id === id) feature.completed = true;
        return feature;
      })
    );
  };

  return (
    <motion.main
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Reload />
      <ul>
        {features
          .filter((feature) => !feature.completed)
          .sort((feature1, feature2) => feature2.votes - feature1.votes)
          .map((feature) => (
            <motion.li layout key={feature.id}>
              <div>
                <button onClick={() => onUpvote(feature.id)}>
                  {upvoteIcon}
                  <span className="votes">
                    <AnimatePresence>
                      <motion.span
                        initial={{ y: 4, scale: 1, opacity: 0.5 }}
                        animate={{ y: 0, scale: 1, opacity: 1 }}
                        exit={{ y: -4, scale: 0.5, opacity: 0 }}
                        key={feature.votes}
                        className="number"
                        style={{ position: 'absolute' }}
                      >
                        {feature.votes}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                </button>
                <span>{feature.name}</span>
              </div>
              <div>
                <OptionsMenu feature={feature} onComplete={onComplete} />
              </div>
            </motion.li>
          ))}
      </ul>
    </motion.main>
  );
}
