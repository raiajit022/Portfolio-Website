import { Card } from '@/ui/card';

export function BlogsSection() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">My Blog</h3>
        <p className="text-gray-600 mb-4">
          I write about data analysis, business intelligence, and my journey in the tech industry. 
          Check out my latest articles on Medium:
        </p>
        <a 
          href="https://medium.com/@raiajit022" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:underline font-semibold"
        >
          Visit My Medium Blog
        </a>
      </Card>
    </div>
  );
} 