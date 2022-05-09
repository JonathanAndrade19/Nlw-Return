import { useState } from "react";

import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

import thougthImageUrl from '../../assets/thougth.svg';
import ideiaImageUrl from '../../assets/ideia.svg';
import bugImageUrl from '../../assets/bug.svg';

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideiaImageUrl,
            alt: 'Imagem de uma lâmpada'
        }
    },
    OTHER: {
        title: 'outro',
        image: {
            source: thougthImageUrl,
            alt: 'Imagem de uma nuvem'
        }
    }
}

export type feedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setfeedbackType] = useState<feedbackType | null>(null)
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
           
           {!feedbackType ? ( 
                <FeedbackTypeStep onFeedbackTypeChanged={setfeedbackType} />
                ) : ( 
                <FeedbackContentStep feedbackType={feedbackType} /> 
                )
            }

            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a className="underline underline-offset-2" href="">Rocketseat</a>
            </footer>

        </div>
    );
}