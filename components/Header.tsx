'use client';
import { useRouter } from 'next/navigation';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { twMerge } from 'tailwind-merge';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { HiHome, HiUser } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import { Button } from './Button';
import { useAuthModal } from '@/hooks/useAuthModal';
import { useUser } from '@/hooks/useUsers';
import toast from 'react-hot-toast/headless';

interface headerProps {
    children: React.ReactNode;
    className?: string;
}
const Header: React.FC<headerProps> = ({ children, className }) => {
    const authModal = useAuthModal();
    const router = useRouter();
    const supabaseClient = useSupabaseClient();
    const { user } = useUser();
    const handlerLogOut = async () => {
        const error = await supabaseClient.auth.signOut();
        //reset song
        router.refresh();

        if (error) {
            toast.error(`${error}`);
        } else {
            toast.success('Logged out');
        }
    };
    return (
        <header
            className={twMerge(
                `h-fit bg-gradient-to-b from-emerald-700 p-6`,
                className
            )}
        >
            <div className='w-full mb-4 flex items-center justify-between'>
                <div className='hidden md:flex gap-x-2 items-center'>
                    <button
                        className='rounded-full bg-black flex items-center justify-center hover:opacity-80 transition'
                        onClick={() => router.back()}
                    >
                        <RxCaretLeft size={32} className=' text-white' />
                    </button>
                    <button
                        className='rounded-full bg-black flex items-center justify-center hover:opacity-80 transition'
                        onClick={() => router.forward}
                    >
                        <RxCaretRight size={32} className=' text-white' />
                    </button>
                </div>
                <div className='flex md:hidden gap-x-2 items-center'>
                    <button
                        className='flex items-center justify-center 
                                bg-white rounded-full
                                  p-2 hover:opacity-80 transition'
                    >
                        <HiHome size={18} className='text-black' />
                    </button>
                    <button
                        className='flex items-center justify-center bg-white rounded-full
            p-2 hover:opacity-80 transition'
                    >
                        <BiSearch size={18} className='text-black' />
                    </button>
                </div>
                <div
                    className='flex justify-between 
                                items-center gap-x-4'
                >
                    {user ? (
                        <div className='flex gap-x-4 items-center'>
                            {user.email}
                            <Button
                                onClick={handlerLogOut}
                                className='bg-white px-4 py-2'
                            >
                                Logout
                            </Button>
                            <Button
                                onClick={() => router.push('/account')}
                                className='bg-white'
                            >
                                <HiUser />
                            </Button>
                        </div>
                    ) : (
                        <>
                            <div>
                                <Button
                                    onClick={authModal.onOpen}
                                    className='bg-transparent
                                 text-neutral-300 font-medium'
                                >
                                    sing up
                                </Button>
                            </div>
                            <div>
                                <Button
                                    onClick={authModal.onOpen}
                                    className='bg-white
                                text-neutral-800 
                                px-6
                                py-2
                                font-medium'
                                >
                                    log in
                                </Button>
                            </div>
                        </>
                    )}
                </div>
            </div>
            {children}
        </header>
    );
};

export { Header };
