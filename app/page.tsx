import { Noto_Sans_SC } from "next/font/google";
import path from "path";
import { promises as fs } from "fs";

const notoSans = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "600"]
});

const socials = [
  {
    name: "Twitter / X",
    href: "https://x.com/xiaoonBNB",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M17.5 3h3.1l-6.8 7.8 8 10.2h-6.3l-4.9-6.2-5.4 6.2H2l7.3-8.4L1.6 3h6.5l4.4 5.6L17.5 3zm-1.1 16h1.7L7.8 5H6.1l10.3 14z" />
      </svg>
    )
  },
  {
    name: "Telegram",
    href: "https://t.me/xiaoxiaobnb",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M21.6 4.4c.3-1.2-.8-2.2-1.9-1.8L3.1 9.2c-1.4.6-1.4 2.6.1 3l4.5 1.4 1.8 5.7c.4 1.2 1.9 1.4 2.6.4l2.6-3.6 5.2 4c1 .8 2.5.2 2.8-1.1l3.9-14.6zm-5.5 4.2-6 5.6c-.2.2-.4.4-.5.7l-.6 2.6-1.1-3.6 8.7-5.3c.5-.3 1 .3.5.7z" />
      </svg>
    )
  },
  {
    name: "Instagram",
    href: "https://instagram.com/sealion_xiaoxiao/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M12 7.3A4.7 4.7 0 1 0 16.7 12 4.7 4.7 0 0 0 12 7.3zm0 7.7A3 3 0 1 1 15 12a3 3 0 0 1-3 3zm6-7.9a1.1 1.1 0 1 1-1.1-1.1A1.1 1.1 0 0 1 18 7.1zm3.1 1.1a5.5 5.5 0 0 0-1.5-3.9 5.5 5.5 0 0 0-3.9-1.5H8.3a5.5 5.5 0 0 0-3.9 1.5A5.5 5.5 0 0 0 2.8 8.2v7.6a5.5 5.5 0 0 0 1.5 3.9 5.5 5.5 0 0 0 3.9 1.5h7.4a5.5 5.5 0 0 0 3.9-1.5 5.5 5.5 0 0 0 1.5-3.9V8.2zm-2 9.5a3.2 3.2 0 0 1-1.8 1.8 5.4 5.4 0 0 1-1.8.3H8.3a5.4 5.4 0 0 1-1.8-.3 3.2 3.2 0 0 1-1.8-1.8 5.4 5.4 0 0 1-.3-1.8V8.3a5.4 5.4 0 0 1 .3-1.8 3.2 3.2 0 0 1 1.8-1.8 5.4 5.4 0 0 1 1.8-.3h7.4a5.4 5.4 0 0 1 1.8.3 3.2 3.2 0 0 1 1.8 1.8 5.4 5.4 0 0 1 .3 1.8v7.4a5.4 5.4 0 0 1-.3 1.8z" />
      </svg>
    )
  }
];

async function getGalleryImages() {
  const galleryDir = path.join(process.cwd(), "public", "gallery");
  const allowed = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);

  try {
    const files = await fs.readdir(galleryDir);
    return files
      .filter((file) => allowed.has(path.extname(file).toLowerCase()))
      .map((file) => `/gallery/${file}`);
  } catch {
    return [];
  }
}

export default async function Home() {
  const galleryImages = await getGalleryImages();
  const marqueeImages = [...galleryImages, ...galleryImages];

  return (
    <main className="ocean-stage min-h-screen overflow-hidden">
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center px-6 pb-16 pt-10 text-center md:px-10 md:pt-12">
        <div className="pointer-events-none absolute left-6 top-10 h-20 w-20 animate-floaty rounded-full bubble opacity-70 blur-[1px] md:left-20 md:top-20 md:h-28 md:w-28" />
        <div className="pointer-events-none absolute right-8 top-24 h-12 w-12 animate-floaty rounded-full bubble opacity-60 md:right-24 md:top-28 md:h-16 md:w-16" />
        <div className="pointer-events-none absolute bottom-16 left-10 hidden h-24 w-24 animate-floaty rounded-full bubble opacity-60 md:block" />
        <div className="pointer-events-none absolute bottom-8 right-12 hidden h-32 w-32 animate-floaty rounded-full bubble opacity-50 md:block" />

        <div className="absolute right-6 top-6 flex items-center gap-3 md:right-10 md:top-8">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-cyan-100 transition hover:-translate-y-0.5 hover:border-cyan-200/70 hover:text-emerald-200"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <p className="mt-6 text-lg font-semibold tracking-[0.3em] text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.75)] md:text-xl">
          网站建设中，敬请期待
        </p>
        <p
          className={`${notoSans.className} mt-4 max-w-3xl text-sm font-medium leading-relaxed text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] md:text-base`}
        >
          小小（Xiaoxiao）是近期在全球范围内爆火的海狮 meme，短时间内在全网斩获数十亿次播放。
          凭借它魔性的动作和极具辨识度的声音，小小迅速席卷各大社交平台，成为海洋系 meme 的现象级代表。
        </p>

        <div className="absolute left-6 top-6 md:left-10 md:top-8">
          <a
            href="https://dexscreener.com/bsc/0xdd3f8c8c33c92747bb968a5ab24f0c75770ab15e"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-emerald-300 to-sky-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-400/40 transition duration-300 hover:scale-[1.03] hover:shadow-glow active:scale-95 md:px-8 md:py-3 md:text-base"
          >
            购买小小 🦭
          </a>
        </div>

        <section className="mt-8 w-full">
          <div className="mx-auto w-full max-w-4xl rounded-3xl p-5">
            <div className="relative h-[320px] w-full overflow-hidden rounded-3xl bg-transparent shadow-[0_28px_60px_rgba(2,12,22,0.65),0_10px_24px_rgba(10,30,60,0.35)] md:h-[460px]">
              <video
                className="h-full w-full rounded-3xl object-cover"
                src="https://cdn.xiaoxiaobsc.xyz/xiaoxiao.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls
              />
            </div>
          </div>
        </section>

        <section className="mt-4 w-full">
          {galleryImages.length > 0 ? (
            <div className="marquee-shell mx-auto w-full max-w-5xl rounded-[28px] px-5 py-4">
              <div className="marquee-fade overflow-hidden">
                <div className="marquee-track flex items-center gap-4">
                  {marqueeImages.map((src, index) => (
                    <div
                      key={`${src}-${index}`}
                      className="rounded-[22px] border border-cyan-200/20 bg-white/5 p-2 shadow-[0_12px_26px_rgba(2,12,22,0.45)]"
                    >
                      <img
                        src={src}
                        alt="Xiaoxiao gallery"
                        className="h-28 w-44 rounded-[18px] object-cover md:h-32 md:w-52"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-white/70">
              把图片放到 public/gallery/ 文件夹中即可自动滚动
            </p>
          )}
        </section>

        <div className="mt-10 flex flex-col items-center gap-3 text-xs uppercase tracking-[0.3em] text-cyan-100/80 md:flex-row">
          <span className="h-[2px] w-16 bg-gradient-to-r from-transparent via-cyan-100 to-transparent" />
          <span>Deep Sea Mood</span>
          <span className="h-[2px] w-16 bg-gradient-to-r from-transparent via-cyan-100 to-transparent" />
        </div>
      </div>
    </main>
  );
}
