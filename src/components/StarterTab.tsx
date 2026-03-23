export function StarterTab() {
  return (
    <div>
      <div className="mb-4 font-display text-[1.1rem] font-semibold text-primary">
        How to make your sourdough starter from scratch
      </div>

      <p className="mb-6 text-[13px] leading-relaxed text-muted">
        A sourdough starter is a living culture of wild yeast and bacteria. It takes 7 days to create
        from scratch and just 5 minutes a day to maintain. Here's everything you need.
      </p>

      <div className="space-y-4">
        <div className="rounded-[14px] border border-border bg-white p-5">
          <div className="mb-3 font-display text-base font-semibold text-primary">What you need</div>
          <ul className="list-disc space-y-1 pl-5 text-[13px] leading-relaxed text-muted">
            <li>Flour (wholemeal or rye works best to begin)</li>
            <li>Water (room temperature, unchlorinated if possible)</li>
            <li>A clean glass jar</li>
            <li>A kitchen scale</li>
          </ul>
        </div>

        <div className="rounded-[14px] border border-border bg-white p-5">
          <div className="mb-3 font-display text-base font-semibold text-primary">Day by Day Guide</div>
          <div className="space-y-2 text-[13px] leading-relaxed text-muted">
            <div>
              <strong className="font-medium">Day 1:</strong> Mix 50g wholemeal flour + 50g room temperature
              water in a clean jar. Stir well, cover loosely, leave at room temperature.
            </div>
            <div>
              <strong className="font-medium">Day 2:</strong> You may see small bubbles. Discard half (50g) and add
              50g fresh flour + 50g water. Stir well.
            </div>
            <div>
              <strong className="font-medium">Day 3-4:</strong> More bubbles appearing. Repeat the discard and
              feed process every 24 hours.
            </div>
            <div>
              <strong className="font-medium">Day 5-6:</strong> Starter should be visibly active and bubbly. Continue
              daily feedings.
            </div>
            <div>
              <strong className="font-medium">Day 7:</strong> Your starter is ready when it doubles in size within
              4-8 hours of feeding and smells pleasantly sour and tangy.
            </div>
          </div>
        </div>

        <div className="rounded-[14px] border border-border bg-white p-5">
          <div className="mb-3 font-display text-base font-semibold text-primary">Feeding Ratio</div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-[14px] border border-border bg-bg2 p-4">
              <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
                Maintenance (once established):
              </div>
              <ul className="list-disc space-y-1 pl-5 text-[13px] leading-relaxed text-muted">
                <li>Starter: 1 part (e.g. 20g)</li>
                <li>Flour: 1 part (e.g. 20g)</li>
                <li>Water: 1 part (e.g. 20g)</li>
              </ul>
              <div className="mt-3 font-medium text-primary">
                Ratio: <span className="font-mono">1:1:1</span>
              </div>
            </div>

            <div className="rounded-[14px] border border-border bg-bg2 p-4">
              <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
                For baking day (more active starter):
              </div>
              <ul className="list-disc space-y-1 pl-5 text-[13px] leading-relaxed text-muted">
                <li>Starter: 1 part (e.g. 20g)</li>
                <li>Flour: 5 parts (e.g. 100g)</li>
                <li>Water: 5 parts (e.g. 100g)</li>
              </ul>
              <div className="mt-3 font-medium text-primary">
                Ratio: <span className="font-mono">1:5:5</span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[14px] border border-border bg-white p-5">
          <div className="mb-3 font-display text-base font-semibold text-primary">Tips</div>
          <ul className="list-disc space-y-1 pl-5 text-[13px] leading-relaxed text-muted">
            <li>
              Store in the fridge if baking less than once a week — feed once a week
            </li>
            <li>Always leave some starter in the jar — never use it all</li>
            <li>Room temperature starter is more active than cold starter</li>
            <li>A healthy starter smells tangy and yeasty, not like nail polish remover</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

