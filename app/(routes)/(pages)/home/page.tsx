"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const HomePage: React.FC = () => {
    const [sushiCount, setSushiCount] = useState(0);

    return (
        <>
            <section id="title" className="w-full flex justify-center">
                <h1 className="text-[5rem]">Sushi counter</h1>
            </section>
            <section id="content" className="flex flex-col justify-center items-center">
                <Image src="sushi.svg" alt="sushi_img" width={100} height={100} />
                <div id="counter" className="flex flex-row items-center gap-4">
                    <Button onClick={() => setSushiCount((prev) => (prev == 0 ? prev : prev - 1))}>
                        -
                    </Button>
                    <p className="text-3xl">{sushiCount}</p>
                    <Button onClick={() => setSushiCount((prev) => prev + 1)}>+</Button>
                </div>
            </section>
        </>
    );
};

export default HomePage;
