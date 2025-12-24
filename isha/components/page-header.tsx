import { MorphingText } from "@/components/textAnimations/morphing-text";

interface PageHeaderProps {
  texts: readonly string[];
  className?: string;
}

export const PageHeader = ({ texts, className = "" }: PageHeaderProps) => (
  <div className={`mb-6 sm:mb-8 md:mb-10 lg:mb-12 ${className}`}>
    <MorphingText
      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center px-2 sm:px-4"
      texts={texts}
    />
  </div>
);
