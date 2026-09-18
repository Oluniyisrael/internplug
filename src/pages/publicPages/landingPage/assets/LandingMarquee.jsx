export default function LandingMarquee() {
    const companies = [
        "Sterling Bank", "Zenith Bank", "GTBank", "Access Bank", "MTN Nigeria",
        "Airtel Nigeria", "Flutterwave", "Paystack", "Dangote Group", "Nestle Nigeria",
        "Nigerian Breweries", "Total Energies", "Shell Nigeria", "Chevron Nigeria", "KPMG Nigeria"
    ];

    const items = [...companies, ...companies];

    return (
        <div className="relative bg-[#071714] border-y border-[#1f5346] py-4 overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#071714] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#071714] to-transparent z-10 pointer-events-none" />
            <div className="flex animate-marquee" style={{ width: `${items.length * 180}px` }}>
                {items.map((company, i) => (
                    <div key={i} className="flex items-center gap-3 px-8 flex-shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#35d399] flex-shrink-0" />
                        <span className="text-[#86ab9f] text-sm font-medium whitespace-nowrap">{company}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
