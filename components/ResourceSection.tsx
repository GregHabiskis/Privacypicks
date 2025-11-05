
import React from 'react';
import { Icon } from './icons';
import { type ResourceCategory } from '../types';

interface ResourceSectionProps {
  category: ResourceCategory;
  selectedTags: string[];
  onTagClick: (tag: string) => void;
}

const subCategoryIcons: Record<string, number[]> = {
    'browsers-extensions': [10, 11, 12],
    'password-managers': [20, 21, 22],
    '2fa': [30, 31, 32],
};

const ResourceSection: React.FC<ResourceSectionProps> = ({ category, selectedTags, onTagClick }) => {
  return (
    <section id={category.id} className="mb-16 scroll-mt-20">
      <div className="flex items-center justify-center gap-4 mb-8">
        <Icon name={category.icon} className="w-8 h-8 text-primary" />
        <h2 className="text-3xl font-bold">{category.title}</h2>
      </div>
      
      {category.subCategories.map((sub) => {
        const customIcons = subCategoryIcons[sub.id];
        return (
            <div key={sub.id} id={sub.id} className="mb-12 scroll-mt-20">
                <div className="flex flex-col items-center gap-3 mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
                    {customIcons ? (
                        <div className="relative h-16 w-32 flex items-center justify-center">
                            {customIcons.map((seed, index) => (
                                <img
                                    key={seed}
                                    loading="lazy"
                                    src={`https://api.dicebear.com/8.x/shapes/svg?seed=${sub.title}-${seed}`}
                                    alt={`${sub.title} icon ${index + 1}`}
                                    className={`w-12 h-12 rounded-lg object-cover shadow-lg absolute border-2 border-white dark:border-gray-700 ${
                                        index === 0 ? '-rotate-12 z-10 -translate-x-4 opacity-70' : ''
                                    } ${
                                        index === 1 ? 'z-20' : ''
                                    } ${
                                        index === 2 ? 'rotate-12 z-10 translate-x-4 opacity-70' : ''
                                    }`}
                                />
                            ))}
                        </div>
                    ) : (
                        <Icon name={sub.icon} className="w-8 h-8" />
                    )}
                    <h3 className="text-2xl font-semibold text-center">
                        {sub.title}
                    </h3>
                </div>

                {sub.links.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sub.links.map((link) => (
                        <div key={link.name} className="bg-white dark:bg-dark-card p-6 rounded-[20px] shadow-lg flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
                        <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 mb-3 group"
                        >
                            <img
                            loading="lazy"
                            src={link.customIcon ? link.customIcon : `https://api.dicebear.com/8.x/shapes/svg?seed=${link.name}`}
                            alt={`${link.name} logo`}
                            className="w-10 h-10 rounded-md object-cover"
                            />
                            <span className="text-xl font-bold group-hover:text-primary dark:group-hover:text-primary transition-colors">
                            {link.name}
                            </span>
                        </a>
                        <p 
                            className="text-sm text-gray-600 dark:text-gray-400 flex-grow"
                            dangerouslySetInnerHTML={{ __html: link.description }}
                        />
                        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                            {link.tags.map((tag) => {
                            const isSelected = selectedTags.includes(tag);
                            return (
                                <button
                                key={tag}
                                onClick={() => onTagClick(tag)}
                                className={`text-xs px-2 py-1 rounded-[20px] transition-colors ${
                                    isSelected
                                        ? 'bg-primary text-white'
                                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/80'
                                }`}
                                >
                                {tag}
                                </button>
                            )
                            })}
                        </div>
                        </div>
                    ))}
                    </div>
                ) : (
                    <div className="text-center py-8 text-gray-500 dark:text-gray-400 bg-white dark:bg-dark-card rounded-[20px] shadow-md">
                        <Icon name="Coffee" className="mx-auto w-10 h-10 mb-2" />
                        <p>Resources coming soon!</p>
                    </div>
                )}
            </div>
        )
    })}
    </section>
  );
};

export default ResourceSection;