import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
function Page() {
  const topic = [
    { id: 1, title: 'General Discussion', description: 'Discuss anything related to My ChatApp.', lastPost: '2 days ago', slug: 'general' },
    { id: 2, title: 'Feature Requests', description: 'Suggest new features and improvements.', lastPost: '1 week ago', slug: 'feature-requests' },
    { id: 3, title: 'Troubleshooting', description: 'Get help with technical issues.', lastPost: '3 days ago', slug: 'troubleshooting' },
    { id: 4, title: 'Announcements', description: 'Stay updated with the latest news and updates.', lastPost: '1 day ago', slug: 'announcements' },
    { id: 5, title: 'Mobile App Support', description: 'Discuss issues and questions related to the mobile app.', lastPost: '5 days ago', slug: 'mobile-app-support' },
    { id: 6, title: 'Group Chat Features', description: 'Discuss and share tips about the group chat feature.', lastPost: '4 days ago', slug: 'group-chat-features' },
    { id: 7, title: 'Security and Privacy', description: 'Questions and discussions about security and privacy on My ChatApp.', lastPost: '6 days ago', slug: 'security-and-privacy' },
    { id: 8, title: 'Python Development', description: 'Share Python code, tips, and questions related to My ChatApp.', lastPost: '7 days ago', slug: 'python-development' },
    { id: 9, title: 'Next.js Development', description: 'Discuss Next.js implementation, best practices, and challenges.', lastPost: '8 days ago', slug: 'next-js-development'}, //Added slug here
    { id: 10, title: 'Clerk Authentication', description: 'Get help and discuss Clerk authentication integration.', lastPost: '9 days ago', slug: 'clerk-authentication' },
    { id: 11, title: 'Node.js Development', description: 'Discuss Node.js backend development for My ChatApp.', lastPost: '10 days ago', slug: 'node-js-development' },
    { id: 12, title: 'Shadcn UI', description: 'Discuss using Shadcn UI components in My ChatApp.', lastPost: '11 days ago', slug: 'shadcn-ui' },
  ];

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-4'>Forums</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {topic.map((forum) => ( // Corrected to topic.map
          <div
            key={forum.id}
            className='bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow'
          >
            <h2 className='text-xl font-semibold mb-2'>{forum.title}</h2>
            <p className='text-gray-600 mb-2'>{forum.description}</p>
            <div className='flex justify-between items-center'>
              <span className='text-sm text-gray-500'>Last post: {forum.lastPost}</span>
              <Link href={`/forum/${forum.slug}`}> {/* Corrected Link usage */}
                <Button className='text-blue-600 hover:underline justify-center'>
                  View Forum
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;