export default function Logo({ }) {
    const logoimg = "https://framerusercontent.com/images/xuhbSUVP4BGB88zA5gVwuHq8mXc.png?width=132&height=132"

    return (
        <div className="flex gap-2 items-center">
            <img src={logoimg} className="h-10 w-10" />
            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-[#f0edfa]">niwts</div>
        </div>
    )
}