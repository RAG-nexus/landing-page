"use client";
import { YouTubeEmbed } from "@next/third-parties/google";

export default function VideoSection() {
  return (
    <section className="flex flex-col items-center py-12 bg-white dark:bg-gray-900">
      <h2 className="text-2xl font-bold mb-4">Descubre RAGnexus en acción</h2>
      <p className="mb-6 text-gray-600 max-w-xl text-center">
        Observa cómo nuestra IA transforma el caos documental en respuestas
        claras y al instante. Dale al play y sorpréndete.
      </p>
      <div className="rounded-xl overflow-hidden shadow-lg w-full max-w-2xl aspect-video">
        <YouTubeEmbed
          videoid="tRg7dyjIddU"
          style="width: 100%; height: 100%; display: block;"
        />
      </div>
    </section>
  );
}
