import { Trophy, ThumbsUp, Users2, Scale, LucideProps } from 'lucide-react';
import { Content } from '../types';

interface StatsProps {
 t: Content;
}

export const Stats = ({ t }: StatsProps) => {
 const stats = [
   {
     value: "30+",
     label: t.stats.years,
     icon: Scale,
     description: "Experience"
   },
   {
     value: "2000+", 
     label: t.stats.cases,
     icon: Trophy,
     description: "Success"
   },
   {
     value: "90%",
     label: t.stats.rate,
     icon: ThumbsUp,
     description: "Satisfaction"
   }
 ];

 return (
   <section className="py-24 bg-brand-sand/5">
     <div className="container mx-auto px-4">
       {/* Stats Grid */}
       <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
         {stats.map((stat, index) => (
           <StatCard
             key={index}
             value={stat.value}
             label={stat.label}
             Icon={stat.icon}
             description={stat.description}
           />
         ))}
       </div>
     </div>
   </section>
 );
};

interface StatCardProps {
 value: string;
 label: string;
 Icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
 description: string;
}

const StatCard = ({ value, label, Icon }: StatCardProps) => (
 <div className="bg-white rounded-lg p-6 border border-brand-sand/10 hover:shadow-sm transition-shadow">
   <div className="flex flex-col items-center text-center">
     {/* Icon */}
     <div className="mb-4">
       <div className="w-12 h-12 rounded-lg bg-brand-sand/5 flex items-center justify-center">
         <Icon className="w-6 h-6 text-brand-coffee" />
       </div>
     </div>
     
     {/* Value */}
     <div className="text-3xl font-bold text-brand-coffee mb-1">
       {value}
     </div>
     
     {/* Label */}
     <div className="text-brand-steel text-sm">
       {label}
     </div>
   </div>
 </div>
);