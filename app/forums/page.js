import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
function Page() {
  const topic = [
    { id: 1, title: 'General Discussion', description: 'Discuss anything and everything!', lastPost: '2 hours ago', slug: 'general-discussion' },
    { id: 2, title: 'Gaming', description: 'Talk about your favorite games, consoles, and esports.', lastPost: '30 minutes ago', slug: 'gaming' },
    { id: 3, title: 'Movies', description: 'Discuss the latest releases, classic films, and your favorite actors.', lastPost: '1 day ago', slug: 'movies' },
    { id: 4, title: 'Music', description: 'Share your favorite artists, albums, and playlists.', lastPost: '5 hours ago', slug: 'music' },
    { id: 5, title: 'Technology', description: 'Discuss the latest gadgets, software, and trends.', lastPost: '1 hour ago', slug: 'technology' },
    { id: 6, title: 'Education', description: 'Share learning resources, tips, and discuss educational topics.', lastPost: '2 days ago', slug: 'education' },
    { id: 7, title: 'Feature Requests', description: 'Suggest new features and improvements for My ChatApp.', lastPost: '1 week ago', slug: 'feature-requests' },
    { id: 8, title: 'Healthcare', description: 'Discuss health and wellness topics, news, and advice.', lastPost: '4 days ago', slug: 'healthcare' },
    { id: 9, title: 'Internet', description: 'Talk about internet culture, memes, and online communities.', lastPost: '12 hours ago', slug: 'internet' },
    { id: 10, title: 'Social Media', description: 'Discuss the latest social media trends and platforms.', lastPost: '1 day ago', slug: 'social-media' },
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