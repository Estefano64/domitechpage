import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FloatingWhatsApp from "../../components/FloatingWhatsApp";
import { blogPosts, getAllBlogSlugs, getPostBySlug } from "../posts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Artículo no encontrado" };

  const url = `https://domitechsolutions.com/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      images: [{ url: post.image, width: 1200, height: 630, alt: post.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: `https://domitechsolutions.com${post.image}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "Domitech Solutions",
      logo: {
        "@type": "ImageObject",
        url: "https://domitechsolutions.com/logo-domitech.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://domitechsolutions.com/blog/${post.slug}`,
    },
    keywords: post.keywords.join(", "),
  };

  return (
    <div className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Navbar />
      <main>
        <article>
          <header className="relative bg-[#0A0A0A] pt-28 pb-20 text-white">
            <div
              className="absolute inset-0 z-0 opacity-30"
              style={{
                backgroundImage: `url('${post.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]/60" />
            <div className="relative z-[2] mx-auto max-w-3xl px-6 lg:px-8">
              <Link
                href="/blog"
                className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#ff0124] hover:text-[#d0001d] font-[family-name:var(--font-montserrat)]"
              >
                ← Volver al blog
              </Link>
              <span className="mt-5 inline-block rounded-full bg-[#ff0124]/15 px-3 py-1 text-[10px] font-bold tracking-[0.18em] uppercase text-[#ff0124] font-[family-name:var(--font-montserrat)]">
                {post.category}
              </span>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl font-[family-name:var(--font-montserrat)]">
                {post.title}
              </h1>
              <p className="mt-5 text-base leading-7 text-white/75 font-[family-name:var(--font-open-sans)]">
                {post.description}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-[12px] text-white/60 font-[family-name:var(--font-open-sans)]">
                <span>Por {post.author}</span>
                <span>•</span>
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("es-PE", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <span>•</span>
                <span>{post.readingTime} de lectura</span>
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
            <div className="prose-domitech font-[family-name:var(--font-open-sans)]">
              {post.content.map((block, idx) => {
                if (block.type === "h2")
                  return (
                    <h2
                      key={idx}
                      className="mt-10 mb-4 text-2xl font-extrabold leading-tight text-[#0A0A0A] sm:text-3xl font-[family-name:var(--font-montserrat)]"
                    >
                      {block.text}
                    </h2>
                  );
                if (block.type === "h3")
                  return (
                    <h3
                      key={idx}
                      className="mt-8 mb-3 text-xl font-bold text-[#0A0A0A] font-[family-name:var(--font-montserrat)]"
                    >
                      {block.text}
                    </h3>
                  );
                if (block.type === "p")
                  return (
                    <p key={idx} className="mb-5 text-base leading-8 text-slate-700">
                      {block.text}
                    </p>
                  );
                if (block.type === "ul")
                  return (
                    <ul
                      key={idx}
                      className="mb-6 list-disc space-y-2 pl-6 text-base leading-7 text-slate-700"
                    >
                      {block.items?.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  );
                if (block.type === "quote")
                  return (
                    <blockquote
                      key={idx}
                      className="my-8 border-l-4 border-[#ff0124] bg-slate-50 px-6 py-5 text-base italic leading-7 text-slate-800"
                    >
                      “{block.text}”
                    </blockquote>
                  );
                return null;
              })}
            </div>

            <div className="mt-12 rounded-2xl bg-gradient-to-br from-[#0A0A0A] to-[#1a1a1a] p-8 text-white">
              <h3 className="text-2xl font-extrabold font-[family-name:var(--font-montserrat)]">
                ¿Listo para hacer crecer tu negocio?
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/75 font-[family-name:var(--font-open-sans)]">
                Agenda una asesoría gratuita con Domitech Solutions. Analizamos
                tu negocio y te decimos exactamente qué necesitas para vender
                más en internet.
              </p>
              <Link
                href="/#contactanos"
                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#ff0124] px-6 py-3 text-[13px] font-bold uppercase tracking-[0.1em] text-white transition-all hover:bg-[#d0001d] font-[family-name:var(--font-montserrat)]"
              >
                Quiero mi asesoría gratis
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <section className="bg-slate-50 py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-2xl font-extrabold text-[#0A0A0A] font-[family-name:var(--font-montserrat)] sm:text-3xl">
                Sigue leyendo
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div
                      className="aspect-[16/10] w-full bg-cover bg-center"
                      style={{ backgroundImage: `url('${related.image}')` }}
                    />
                    <div className="p-5">
                      <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#ff0124] font-[family-name:var(--font-montserrat)]">
                        {related.category}
                      </span>
                      <h3 className="mt-2 text-base font-extrabold leading-snug text-[#0A0A0A] transition-colors group-hover:text-[#ff0124] font-[family-name:var(--font-montserrat)]">
                        {related.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
