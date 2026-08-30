import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryPage } from "@/components/IndustryPage";
import { getIndustry, industries } from "@/lib/industries";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);
  if (!industry) {
    return { title: "Industry" };
  }
  return {
    title: industry.title,
    description: industry.metaDescription,
  };
}

export default async function IndustryRoutePage({ params }: Props) {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);
  if (!industry) {
    notFound();
  }
  return <IndustryPage industry={getIndustry(slug)} />;
}
