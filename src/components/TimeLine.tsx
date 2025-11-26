import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineApp() {
  const data = [
    {
      title: "Subscribe",
      content: (
        <div className="space-y-6">
          <p className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Pick a plan that fits you and complete the quick sign-up process.
          </p>
          <div className="grid grid-cols-1 gap-3 md:gap-4">
            <div className="flex items-start gap-3 text-sm md:text-base text-gray-600 dark:text-gray-400">
              <span className="text-primary text-lg flex-shrink-0 mt-0.5">✓</span>
              <span>Choose Monthly, Quarterly, or Annual subscriptions.</span>
            </div>
            <div className="flex items-start gap-3 text-sm md:text-base text-gray-600 dark:text-gray-400">
              <span className="text-primary text-lg flex-shrink-0 mt-0.5">✓</span>
              <span>Simple pricing. Premium quality. Cancel anytime.</span>
            </div>
            <div className="flex items-start gap-3 text-sm md:text-base text-gray-600 dark:text-gray-400">
              <span className="text-primary text-lg flex-shrink-0 mt-0.5">✓</span>
              <span>Get 30 Polaroids or 10 A3 Posters every month.</span>
            </div>
            <div className="flex items-start gap-3 text-sm md:text-base text-gray-600 dark:text-gray-400">
              <span className="text-primary text-lg flex-shrink-0 mt-0.5">✓</span>
              <span>Or choose the Combo Plan for the best value.</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Send Your Photos",
      content: (
        <div className="space-y-6">
          <p className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Uploading made effortless — just use WhatsApp or our website.
          </p>
          <div className="grid grid-cols-1 gap-3 md:gap-4">
            <div className="flex items-start gap-3 text-sm md:text-base text-gray-600 dark:text-gray-400">
              <span className="text-primary text-lg flex-shrink-0 mt-0.5">📱</span>
              <span>Send photos anytime throughout the month.</span>
            </div>
            <div className="flex items-start gap-3 text-sm md:text-base text-gray-600 dark:text-gray-400">
              <span className="text-primary text-lg flex-shrink-0 mt-0.5">🖼️</span>
              <span>Any quality, any format — we enhance them automatically.</span>
            </div>
            <div className="flex items-start gap-3 text-sm md:text-base text-gray-600 dark:text-gray-400">
              <span className="text-primary text-lg flex-shrink-0 mt-0.5">📝</span>
              <span>Organize your photos with album names or captions (optional).</span>
            </div>
            <div className="flex items-start gap-3 text-sm md:text-base text-gray-600 dark:text-gray-400">
              <span className="text-primary text-lg flex-shrink-0 mt-0.5">📊</span>
              <span>Track your uploads from your dashboard.</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "We Process & Print",
      content: (
        <div className="space-y-6">
          <p className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Our system prepares your photos for perfect print results.
          </p>
          <div className="grid grid-cols-1 gap-3 md:gap-4">
            <div className="flex items-start gap-3 text-sm md:text-base text-gray-600 dark:text-gray-400">
              <span className="text-primary text-lg flex-shrink-0 mt-0.5">✨</span>
              <span>AI-powered enhancement for brightness, colors, and clarity.</span>
            </div>
            <div className="flex items-start gap-3 text-sm md:text-base text-gray-600 dark:text-gray-400">
              <span className="text-primary text-lg flex-shrink-0 mt-0.5">✂️</span>
              <span>Smart cropping to fit polaroid or poster templates perfectly.</span>
            </div>
            <div className="flex items-start gap-3 text-sm md:text-base text-gray-600 dark:text-gray-400">
              <span className="text-primary text-lg flex-shrink-0 mt-0.5">👁️</span>
              <span>Preview your final prints before they're processed (coming soon).</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Monthly Delivery",
      content: (
        <div className="space-y-6">
          <p className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Receive your prints at the end of the month or within the first week.
          </p>
          <div className="grid grid-cols-1 gap-3 md:gap-4">
            <div className="flex items-start gap-3 text-sm md:text-base text-gray-600 dark:text-gray-400">
              <span className="text-primary text-lg flex-shrink-0 mt-0.5">📦</span>
              <span>Neatly packed and delivered to your doorstep.</span>
            </div>
            <div className="flex items-start gap-3 text-sm md:text-base text-gray-600 dark:text-gray-400">
              <span className="text-primary text-lg flex-shrink-0 mt-0.5">🚚</span>
              <span>Track your shipment directly from your dashboard.</span>
            </div>
            <div className="flex items-start gap-3 text-sm md:text-base text-gray-600 dark:text-gray-400">
              <span className="text-primary text-lg flex-shrink-0 mt-0.5">🔄</span>
              <span>Free reprints for damaged or missing items.</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
