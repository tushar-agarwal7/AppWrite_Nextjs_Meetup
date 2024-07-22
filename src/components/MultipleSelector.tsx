import React from 'react';
import MultipleSelector, { Option } from '@/components/ui/multiple-selector';

const OPTIONS: Option[] = [
  { label: 'nextjs', value: 'nextjs' },
  { label: 'React', value: 'react' },
  { label: 'Remix', value: 'remix' },
  { label: 'Vite', value: 'vite' },
  { label: 'Nuxt', value: 'nuxt' },
  { label: 'Vue', value: 'vue' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Angular', value: 'angular' },
  { label: 'Ember', value: 'ember', disable: true },
  { label: 'Gatsby', value: 'gatsby', disable: true },
  { label: 'Astro', value: 'astro' },
];

const MultipleSelectorDemo = () => {
  return (
    <div className="w-full px-10">
      <MultipleSelector
        defaultOptions={OPTIONS}
        placeholder="Select Your Intrests..."
        emptyIndicator={
          <p className="text-center text-lg leading-10">
            no results found.
          </p>
        }
      />
    </div>
  );
};

export default MultipleSelectorDemo;