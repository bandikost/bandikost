import banner from "../../Images/testbanner.jpg";

export default function Banner({childern}) {
    return (
        <div className="relative w-full h-64 sm:h-96 mt-20">
            <img
                src={banner}
                alt="Banner"
                className="w-full h-full object-contain"
            />
            {childern}
        </div>
    );
}