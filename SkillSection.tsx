export function SkillSection({ title, skills }: { title: string; skills: string }) {
  return (
    <div className="w-full">
      <h3 className="font-semibold mb-2">{title}:</h3>
      <p className="text-gray-600 text-sm">{skills}</p>
    </div>
  )
}

