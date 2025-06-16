import React, { useState } from "react";

const CategoryIcons = {
  "Web Applications": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M9.53001 6.47001C9.38939 6.32956 9.19876 6.25067 9.00001 6.25067C8.80126 6.25067 8.61064 6.32956 8.47001 6.47001L3.47001 11.47C3.32956 11.6106 3.25067 11.8013 3.25067 12C3.25067 12.1988 3.32956 12.3894 3.47001 12.53L8.47001 17.53C8.61064 17.6705 8.80126 17.7494 9.00001 17.7494C9.19876 17.7494 9.38939 17.6705 9.53001 17.53C9.67046 17.3894 9.74935 17.1988 9.74935 17C9.74935 16.8013 9.67046 16.6106 9.53001 16.47L5.06001 12L9.53001 7.53001C9.67046 7.38939 9.74935 7.19876 9.74935 7.00001C9.74935 6.80126 9.67046 6.61064 9.53001 6.47001Z" />
      <path d="M20.53 11.47L15.53 6.47003C15.3878 6.33755 15.1998 6.26543 15.0055 6.26885C14.8112 6.27228 14.6258 6.35099 14.4884 6.48841C14.351 6.62582 14.2723 6.81121 14.2688 7.00551C14.2654 7.19981 14.3375 7.38785 14.47 7.53003L18.94 12L14.47 16.47C14.3296 16.6107 14.2507 16.8013 14.2507 17C14.2507 17.1988 14.3296 17.3894 14.47 17.53C14.6106 17.6705 14.8013 17.7494 15 17.7494C15.1988 17.7494 15.3894 17.6705 15.53 17.53L20.53 12.53C20.6705 12.3894 20.7494 12.1988 20.7494 12C20.7494 11.8013 20.6705 11.6107 20.53 11.47Z" />
    </svg>
  ),
  "Front-end Development": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M19 16.75H5C4.53668 16.7474 4.09309 16.5622 3.76546 16.2345C3.43784 15.9069 3.25263 15.4633 3.25 15V5C3.25263 4.53668 3.43784 4.09309 3.76546 3.76546C4.09309 3.43784 4.53668 3.25263 5 3.25H19C19.4633 3.25263 19.9069 3.43784 20.2345 3.76546C20.5622 4.09309 20.7474 4.53668 20.75 5V15C20.7474 15.4633 20.5622 15.9069 20.2345 16.2345C19.9069 16.5622 19.4633 16.7474 19 16.75ZM5 4.75C4.9337 4.75 4.87011 4.77634 4.82322 4.82322C4.77634 4.87011 4.75 4.9337 4.75 5V15C4.75 15.0663 4.77634 15.1299 4.82322 15.1768C4.87011 15.2237 4.9337 15.25 5 15.25H19C19.0663 15.25 19.1299 15.2237 19.1768 15.1768C19.2237 15.1299 19.25 15.0663 19.25 15V5C19.25 4.9337 19.2237 4.87011 19.1768 4.82322C19.1299 4.77634 19.0663 4.75 19 4.75H5Z" />
      <path d="M15 20.75H12C11.8019 20.7474 11.6126 20.6676 11.4725 20.5275C11.3324 20.3874 11.2526 20.1981 11.25 20V16C11.25 15.8011 11.329 15.6103 11.4697 15.4697C11.6103 15.329 11.8011 15.25 12 15.25C12.1989 15.25 12.3897 15.329 12.5303 15.4697C12.671 15.6103 12.75 15.8011 12.75 16V19.25H15C15.1989 19.25 15.3897 19.329 15.5303 19.4697C15.671 19.6103 15.75 19.8011 15.75 20C15.75 20.1989 15.671 20.3897 15.5303 20.5303C15.3897 20.671 15.1989 20.75 15 20.75Z" />
      <path d="M12 20.75H9C8.80109 20.75 8.61032 20.671 8.46967 20.5303C8.32902 20.3897 8.25 20.1989 8.25 20C8.25 19.8011 8.32902 19.6103 8.46967 19.4697C8.61032 19.329 8.80109 19.25 9 19.25H12C12.1989 19.25 12.3897 19.329 12.5303 19.4697C12.671 19.6103 12.75 19.8011 12.75 20C12.75 20.1989 12.671 20.3897 12.5303 20.5303C12.3897 20.671 12.1989 20.75 12 20.75Z" />
    </svg>
  ),
  "Back-end Development": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M19.48 4.54C17.1332 3.44415 14.5886 2.83523 12 2.75C9.41134 2.83523 6.8668 3.44415 4.51999 4.54C4.21866 4.68158 3.96427 4.90664 3.78702 5.18847C3.60977 5.47031 3.51709 5.79708 3.51999 6.13V17.87C3.51709 18.2029 3.60977 18.5297 3.78702 18.8115C3.96427 19.0934 4.21866 19.3184 4.51999 19.46C6.8668 20.5559 9.41134 21.1648 12 21.25C14.5886 21.1648 17.1332 20.5559 19.48 19.46C19.7813 19.3184 20.0357 19.0934 20.213 18.8115C20.3902 18.5297 20.4829 18.2029 20.48 17.87V6.13C20.4829 5.79708 20.3902 5.47031 20.213 5.18847C20.0357 4.90664 19.7813 4.68158 19.48 4.54ZM19 12.54C16.8088 13.5858 14.4264 14.1712 12 14.26C9.57362 14.1712 7.19122 13.5858 4.99999 12.54V8.68C7.20966 9.65164 9.58702 10.1848 12 10.25C14.413 10.1848 16.7903 9.65164 19 8.68V12.54ZM5.14999 5.9C7.2984 4.89285 9.62863 4.33155 12 4.25C14.3743 4.33323 16.7075 4.89442 18.86 5.9C18.9021 5.92191 18.9374 5.95492 18.9621 5.99547C18.9868 6.03601 18.9999 6.08254 19 6.13V7C16.8088 8.0458 14.4264 8.63119 12 8.72C9.57362 8.63119 7.19122 8.0458 4.99999 7V6.1C5.00524 6.05643 5.02187 6.01501 5.0482 5.9799C5.07453 5.9448 5.10964 5.91724 5.14999 5.9ZM18.85 18.1C16.7016 19.1071 14.3714 19.6684 12 19.75C9.62566 19.6668 7.29248 19.1056 5.13999 18.1C5.09789 18.0781 5.06258 18.0451 5.0379 18.0045C5.01322 17.964 5.00011 17.9175 4.99999 17.87V14.18C7.20966 15.1516 9.58702 15.6848 12 15.75C14.413 15.6848 16.7903 15.1516 19 14.18V17.87C19.0002 17.9188 18.9861 17.9666 18.9594 18.0074C18.9327 18.0483 18.8947 18.0805 18.85 18.1Z" />
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Web Applications": [
      "Responsive Single Page Applications (SPAs)",
      "HTML5 semantic structure & CSS3",
      "Deployment on Vercel",
      "Design with Flexbox and CSS Grid",
    ],
    "Front-end Development": [
      "React & Typescript (TSX)",
      "Modern Javascript (ES6+)",
      "Ionic Framework for hybrid apps",
      "Tailwind CSS for custom UI design",
    ],
    "Back-end Development": [
      "Python scripting and server logic",
      "API integration and handling",
      "Lightweight back-end structures",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        What I do?
      </h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="pl-1">•</span>
                      <li className="pl-3">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
