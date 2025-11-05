import React, { useMemo } from 'react';
import { Icon } from './icons';
import { type ResourceCategory, type SourceType } from '../types';

interface ResourceSectionProps {
  category: ResourceCategory;
  selectedTags: string[];
  onTagClick: (tag: string) => void;
}

const SourceIcon: React.FC<{ type: SourceType }> = ({ type }) => {
    const commonClasses = "text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors";
    switch (type) {
        case 'github':
            return <Icon name="GitHub" size={20} className={commonClasses} />;
        case 'playstore':
            return <Icon name="Play" size={20} className={commonClasses} />;
        case 'appstore':
            return <Icon name="ShoppingBag" size={20} className={commonClasses} />;
        case 'fdroid':
            return <Icon name="Package" size={20} className={commonClasses} />;
        case 'chrome':
            return <Icon name="Chrome" size={20} className={commonClasses} />;
        // FIX: Replaced "Firefox" with "Globe" as the icon name because "Firefox" is not a valid react-feather icon.
        case 'firefox':
            return <Icon name="Globe" size={20} className={commonClasses} />;
        default:
            return <Icon name="ExternalLink" size={20} className={commonClasses} />;
    }
}


const ResourceSection: React.FC<ResourceSectionProps> = ({ category, selectedTags, onTagClick }) => {
  return (
    <section id={category.id} className="mb-16 scroll-mt-20">
      <div className="flex items-center justify-center gap-4 mb-8">
        <Icon name={category.icon} className="w-10 h-10 text-primary" />
        <h2 className="text-3xl font-bold">{category.title}</h2>
      </div>

      {category.id === 'operating-systems' && (
        <div className="max-w-4xl mx-auto mb-10 text-center text-gray-600 dark:text-gray-400">
            <p className="mb-4">
                Linux is not a standalone operating system—it's a kernel, the core of an operating system. The ones mentioned below are called Linux distributions (or “distros” for short). I chose these specifically for their beginner-friendly nature and strong privacy and security practices out of the box. Not every Linux distro is created equal, but almost all guarantee better privacy, digital control, and open-source values than Windows or macOS.
            </p>
            <p>
                If you want to learn more about other distros, you can use <a href="https://distrochooser.de/" className="text-primary hover:brightness-90" target="_blank" rel="noopener noreferrer">Distrochooser</a> to help you find the one that makes the most sense for you.
            </p>
        </div>
      )}
      
      {category.subCategories.map((sub) => (
        <div key={sub.id} id={sub.id} className="mb-12 scroll-mt-20">
            <div className="flex items-center justify-center gap-3 mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
                <Icon name={sub.icon} size={24} className="text-primary" />
                <h3 className="text-2xl font-semibold text-center">
                    {sub.title}
                </h3>
            </div>

            {sub.links.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sub.links.map((link) => {
                    const websiteUrl = link.sources.find(s => s.type === 'website')?.url || '#';
                    
                    const sourceOrder: SourceType[] = ['playstore', 'appstore', 'fdroid', 'github', 'chrome', 'firefox'];
                    const sortedSourceLinks = useMemo(() => link.sources
                        .filter(s => s.type !== 'website')
                        .sort((a, b) => {
                            const indexA = sourceOrder.indexOf(a.type);
                            const indexB = sourceOrder.indexOf(b.type);
                            if (indexA === -1 && indexB === -1) return 0;
                            if (indexA === -1) return 1;
                            if (indexB === -1) return -1;
                            return indexA - indexB;
                        }), [link.sources]);

                    return (
                        <div key={link.name} className="bg-white dark:bg-dark-card p-6 rounded-[20px] shadow-lg flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
                            <div className="flex justify-between items-start mb-3">
                                <a
                                    href={websiteUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 group"
                                >
                                    <img
                                        loading="lazy"
                                        src={link.customIcon ? link.customIcon : `https://api.dicebear.com/8.x/shapes/svg?seed=${link.name}`}
                                        alt={`${link.name} logo`}
                                        className="w-[55px] h-[55px] rounded-[15px] object-cover"
                                    />
                                    <span className="text-xl font-bold group-hover:text-primary dark:group-hover:text-primary transition-colors">
                                        {link.name}
                                    </span>
                                </a>
                                <div className="flex items-center gap-2.5 flex-shrink-0 ml-2 mt-1">
                                    {sortedSourceLinks.map(source => (
                                        <a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer" aria-label={`${link.name} on ${source.type}`}>
                                            <SourceIcon type={source.type} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                            
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
                    )
                })}
                </div>
            ) : (
                <div className="text-center py-8 text-gray-500 dark:text-gray-400 bg-white dark:bg-dark-card rounded-[20px] shadow-md">
                    <Icon name="Coffee" className="mx-auto w-12 h-12 mb-2" />
                    <p>Resources coming soon!</p>
                </div>
            )}
        </div>
      ))}
    </section>
  );
};

export default ResourceSection;