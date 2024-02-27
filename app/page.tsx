'use client';

import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';

import { IconArrowLeft } from '@tabler/icons-react';

export default function Home() {
	const { toast } = useToast();

	return (
		<div className='flex flex-col justify-center items-center h-screen gap-4 z-0'>
			<Button
				onClick={() => {
					toast({
						title: 'Wow',
						description: 'Amazing toast',
						action: <ToastAction altText='oui'>Oui</ToastAction>,
					});
				}}>
				Click me
			</Button>
			<IconArrowLeft />
			<Select>
				<SelectTrigger className='w-[180px]'>
					<SelectValue placeholder={'Choose an option'} />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value='option1'>Option 1</SelectItem>
					<SelectItem value='option2'>Option 2</SelectItem>
					<SelectItem value='option3'>Option 3</SelectItem>
				</SelectContent>
			</Select>
		</div>
	);
}
