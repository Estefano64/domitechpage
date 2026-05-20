import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import { blogPosts } from "./posts";

export const metadata: Metadata = {
  title: "Blog | Marketing Digital y Desarrollo Web en Arequipa",
  description:
    "Aprende sobre marketing digital, desarrollo web, redes sociales, SEO y e-commerce con la guía de Domitech Solutions. Recursos prácticos para hacer crecer tu negocio en Arequipa.",
  keywords: [
    "blog marketing digital arequipa",
    "blog desarrollo web",
    "blog seo arequipa",
    "blog ecommerce perú",
    "consejos marketing digital",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog de Domitech Solutions | Marketing Digital en Arequipa",
    description:
      "Guías y consejos sobre marketing digital, desarrollo web, SEO y redes sociales para empresas en Arequipa.",
    url: "https://domitechsolutions.com/blog",
    type: "website",
  },
};

export default function BlogIndexPage() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog de Domitech Solutions",
    url: "https://domitechsolutions.com/blog",
    description:
      "Artículos sobre marketing digital, desarrollo web, SEO y redes sociales para empresas en Arequipa.",
    blogPost: sortedPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `https://domitechsolutions.com/blog/${post.slug}`,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      author: { "@type": "Organization", name: post.author },
    })),
  };

  return (
    <div className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <Navbar />
      <main>
        <section className="bg-[#0A0A0A] pt-28 pb-16 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#ff0124] font-[family-name:var(--font-montserrat)]">
              Blog Domitech
            </p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl font-[family-name:var(--font-montserrat)]">
              Ideas para hacer crecer
              <br />
              <span className="bg-gradient-to-r from-[#ff0124] to-[#d0001d] bg-clip-text text-transparent">
                tu negocio digital
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 font-[family-name:var(--font-open-sans)]">
              Guías, estrategias y consejos prácticos sobre marketing digital,
              desarrollo web, SEO, redes sociales y e-commerce para empresas y
              emprendedores en Arequipa.
            </p>
          </div>
        </section>

        <section className="bg-[var(--color-bg-primary)] py-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
            {sortedPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div
                    className="aspect-[16/10] w-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${post.image}')` }}
                    role="img"
                    aria-label={post.imageAlt}
                  />
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-block w-fit rounded-full bg-[#ff0124]/10 px-3 py-1 text-[10px] font-bold tracking-[0.18em] uppercase text-[#ff0124] font-[family-name:var(--font-montserrat)]">
                    {post.category}
                  </span>
                  <h2 className="mt-3 text-xl font-extrabold leading-tight text-[#0A0A0A] transition-colors group-hover:text-[#ff0124] font-[family-name:var(--font-montserrat)]">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 font-[family-name:var(--font-open-sans)]">
                    {post.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-[12px] text-slate-500 font-[family-name:var(--font-open-sans)]">
                    <time dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString("es-PE", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    <span>{post.readingTime} de lectura</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
