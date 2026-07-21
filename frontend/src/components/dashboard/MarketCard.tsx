import Card from "../ui/Card";

interface MarketCardProps {
    title: string;
    price: string;
    change: string;
    positive: boolean;
}

const MarketCard = ({
    title,
    price,
    change,
    positive,
}: MarketCardProps) => {
    return (
        <Card>
            <div className="space-y-4">

                <h3 className="text-sm font-medium text-zinc-400">
                    {title}
                </h3>

                <p className="text-4xl font-bold tracking-tight text-white">
                    {price}
                </p>

                <div className="flex items-center justify-between">

                    <span
                        className={`text-sm font-semibold ${positive ? "text-emerald-400" : "text-red-400"
                            }`}
                    >
                        {change}
                    </span>

                    <div className="h-10 w-24 rounded-md bg-zinc-800" />

                </div>

            </div>
        </Card>
    );
};

export default MarketCard;