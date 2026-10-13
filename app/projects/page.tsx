import { JsonLd } from '@/components/json-ld';
import { PageFrame, PageHeader } from '@/components/page-header';
import { ProjectsGallery } from '@/components/projects-gallery';
import { projects } from '@/lib/data';
import { projectListSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
	title: 'Projects | React Native & MERN Apps by Muhammad Saqib',
	description:
		'Mobile and web applications built by Muhammad Saqib with React Native, React, Next.js, Node.js and Firebase: live tracking, live streaming, social, finance and crypto apps.',
	path: '/projects',
});

export default function ProjectsPage() {
	return (
		<PageFrame>
			<ProjectsGallery projects={projects} header={<PageHeader title="Projects" />} />
			<JsonLd data={projectListSchema()} />
		</PageFrame>
	);
}
