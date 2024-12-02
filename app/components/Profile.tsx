import Image from 'next/image';

interface SkillSectionProps {
  title: string;
  skills: string;
}

function SkillSection({ title, skills }: SkillSectionProps) {
  return (
    <div className="w-full">
      <h3 className="font-semibold mb-2">{title}:</h3>
      <p className="text-gray-600 text-sm">{skills}</p>
    </div>
  );
}

export function Profile() {
  return (
    <aside className="md:w-80 flex flex-col items-center md:items-start gap-6">
      <div className="text-center md:text-left">
        <div className="mb-4 relative w-32 h-32 mx-auto md:mx-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled1213131.jpg-q93cYvjW8uR45bGY5YAUy8XR7dRO9o.jpeg"
            alt="Ajit Rai"
            width={128}
            height={128}
            className="rounded-full"
          />
        </div>
        <h1 className="text-2xl font-bold mb-1">Ajit Kumar Rai</h1>
        <p className="text-gray-600 mb-4">Data Analyst | Business Intelligence Expert</p>
        
        <div className="text-sm text-gray-600 space-y-1">
          <p>📧 raiajit022@gmail.com</p>
          <p>📱 +91 9868965161</p>
          <p>📍 Bengaluru</p>
          <a href="https://www.linkedin.com/in/raiajit011/" className="text-blue-600 hover:underline">
            🔗 LinkedIn Profile
          </a>
        </div>
      </div>

      <div className="w-full space-y-4">
        <SkillSection 
          title="Technical Skills" 
          skills="MS Excel, Python, Power BI, SQL"
        />
        <SkillSection 
          title="Soft Skills" 
          skills="Problem Solving, Critical Thinking, Information Gathering"
        />
        <SkillSection 
          title="Domain Knowledge" 
          skills="Financial Statement Understanding, Business Analytics"
        />
        <SkillSection 
          title="Languages" 
          skills="Hindi, English"
        />
      </div>
    </aside>
  );
} 