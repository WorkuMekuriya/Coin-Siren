import { NextResponse } from 'next/server';

interface JobItem {
  icon: string;
  title: string;
}

export async function GET() {
  try {
    const jobItems: JobItem[] = [
      { icon: 'Marketing', title: '해외 마케팅' },
      { icon: 'Image', title: '퍼블리셔' },
      { icon: 'Box', title: '캐드원(제도사)' },
      { icon: 'Target', title: '해외 세일즈' },
      { icon: 'Call', title: '해외 CS' },
    ];

    return NextResponse.json({ success: true, data: jobItems }, { status: 200 });
  } catch (error) {
    console.error('Error fetching job items:', error);
    return NextResponse.json({ success: false, message: 'Failed to fetch job items' }, { status: 500 });
  }
}
