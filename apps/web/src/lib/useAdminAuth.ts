// lib/useAdminAuth.ts
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function useAdminAuth(role?: 'super' | 'store') {
  const router = useRouter();

  useEffect(() => {
    async function checkAuth() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/me`,
        {
          credentials: 'include',
        },
      );
      const data = await res.json();

      if (!res.ok || !data || !data.role) {
        router.push('/admin-dashboard');
        return;
      }

      if (role === 'super' && data.role !== 'super') {
        router.push('/admin-dashboard'); // Store Admin tidak boleh akses
      }
    }

    checkAuth();
  }, [role, router]);
}
