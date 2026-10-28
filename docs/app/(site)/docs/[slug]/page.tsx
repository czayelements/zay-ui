import { DocPage, pageMetadata } from "@/components/doc-page";
import { allPages } from "@/lib/content";

/* Components and blocks have their own routes; every other slug is a written page. */
export function generateStaticParams() {
  return allPages()
    .filter((p) => p.slug !== "introduction")
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return pageMetadata((await params).slug);
}

export default async function WrittenPage({ params }: { params: Promise<{ slug: string }> }) {
  return <DocPage slug={(await params).slug} />;
}
