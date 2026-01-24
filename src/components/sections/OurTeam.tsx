'use client';

import teamData from '@/../public/data/team.json';
import Image from 'next/image';

export default function OurTeamSection() {
    return (
        <main className="w-full bg-neutral-50 py-30">
            <div className="mx-auto max-w-[1472px] px-4">
                {/* Top Section */}
                <div className="mb-24 flex flex-col items-center gap-4">
                    {/* Kicker */}
                    <p className="font-nav text-sm font-bold uppercase leading-5 tracking-[0.75px] text-[#EA7B69]">
                        • TEAM
                    </p>

                    {/* Title */}
                    <h2 className="font-heading max-w-[800px] text-center text-[48px] font-medium leading-[56px] text-gray-950">
                        A Small,{' '}
                        <span className="font-serif italic">Passionate Team</span>
                        <span className="block">Focused on Digital Product</span>
                    </h2>
                </div>

                {/* Team Cards Grid */}
                <div className="grid justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {teamData.map((member) => {
                        const hasValidImage = member.image.startsWith('/assets/images/');

                        return (
                            <div
                                key={member.id}
                                className="flex h-[380px] w-[350px] flex-col gap-4 rounded-[32px] border border-[#E8E6E6] bg-white px-2 pb-4 pt-2"
                            >
                                {/* Image Container */}
                                <div
                                    className="relative h-[295px] w-full overflow-hidden rounded-3xl"
                                    style={{
                                        background: 'linear-gradient(180deg, #FFFFFF 0%, #FDEFED 100%)',
                                    }}
                                >
                                    {hasValidImage && (
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover"
                                        />
                                    )}
                                </div>

                                {/* Text Content */}
                                <div className="flex flex-col items-center gap-1">
                                    <h3 className="font-heading text-center text-[21px] font-medium leading-[21px] text-gray-950">
                                        {member.name}
                                    </h3>
                                    <p className="font-nav text-center text-[13px] font-normal leading-5 text-gray-950">
                                        {member.designation}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
