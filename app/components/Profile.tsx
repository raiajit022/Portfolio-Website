import Image from 'next/image';
import { SkillSection } from './SkillSection';
import { CONTACT_INFO, PROFILE_IMAGE, SKILLS } from '@/lib/constants';

export function Profile() {
  return (
    <aside className="w-80 flex flex-col gap-6 bg-white rounded-lg p-6 shadow-sm h-fit">
      <div className="text-center">
        <div className="mb-4 relative w-32 h-32 mx-auto">
          <Image
            src={PROFILE_IMAGE}
            alt="Ajit Rai"
            width={128}
            height={128}
            className="rounded-full"
            priority
          />
        </div>
        <h1 className="text-2xl font-bold mb-1">Ajit Rai</h1>
        <p className="text-gray-600 mb-4">Business Analyst | Business Intelligence Expert</p>
        
        <div className="text-sm text-gray-600 space-y-2 text-left">
          <p>📧 {CONTACT_INFO.email}</p>
          <p>📱 {CONTACT_INFO.phone}</p>
          <p>📍 {CONTACT_INFO.location}</p>
          <a 
            href={CONTACT_INFO.github}
            className="text-blue-600 hover:underline inline-flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 GitHub Profile
          </a>
        </div>
      </div>

      <div className="space-y-4 text-left">
        <SkillSection title="Technical Skills" skills={SKILLS.technical} />
        <SkillSection title="Soft Skills" skills={SKILLS.soft} />
        <SkillSection title="Domain Knowledge" skills={SKILLS.domain} />
        <SkillSection title="Languages" skills={SKILLS.languages} />
      </div>
    </aside>
  );
} 