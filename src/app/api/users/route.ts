import { NextResponse } from 'next/server';

interface User {
  id: number;
  avatar: string;
  name: string;
  experience: string;
  details: string[];
}

export async function GET() {
  try {
    const users: User[] = [
      {
        id: 1,
        avatar: '/images/avatar.png',
        name: 'Abhishek Gupta',
        experience: 'Marketing · 3y+',
        details: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리'],
      },
      {
        id: 2,
        avatar: '/images/avatar.png',
        name: 'Mekuriya Worku',
        experience: 'Engineer · 6y+',
        details: ['시스템 설계', '네트워크 관리', '프로그래밍', '보안 유지', '블로그 글 작성'],
      },
      {
        id: 3,
        avatar: '/images/avatar.png',
        name: 'Jane Smith',
        experience: 'Marketing · 3y+',
        details: ['콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 작성'],
      },
    ];

    return NextResponse.json({ success: true, data: users }, { status: 200 });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ success: false, message: 'Failed to fetch users' }, { status: 500 });
  }
}
