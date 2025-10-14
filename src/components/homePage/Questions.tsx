import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Questions: React.FC = () => {
    // بدل boolean واحد، نخزن الـ index المفتوح
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);

    interface Question {
        question: string;
        answer: string;
    }

    const questions: Question[] = [
        {
            question: "What are the school hours at Little Learners Academy?",
            answer: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up."
        },
        {
            question: "How do you handle food allergies and dietary restrictions?",
            answer: "We maintain a low student-to-teacher ratio of 10:1 to ensure personalized attention and support for each child."
        },
        {
            question: "Is there a uniform policy for students?",
            answer: "Yes, we have a comfortable and practical uniform policy to promote equality among students."
        },
        {
            question: "What is the teacher-to-student ratio at Little Learners Academy?",
            answer: "We maintain a low student-to-teacher ratio of 10:1 to ensure personalized attention and support for each child."
        },
        {
            question: "What extracurricular activities are available for students?",
            answer: "We offer art, music, and physical education programs to help children explore their interests."
        },
        {
            question: "How do you handle discipline and behavior management?",
            answer: "We use positive reinforcement and communication-based approaches for behavior management."
        },
        {
            question: "What safety measures are in place at the school?",
            answer: "Our facility has secure entry systems, CCTV monitoring, and trained staff for emergency situations."
        },
        {
            question: "How can I get involved in the school community?",
            answer: "We encourage parent participation through regular meetings and school events."
        }
    ];

    // دالة لتبديل حالة الفتح
    const toggleQuestion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 !mt-8 items-start">
            {questions.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                    <div
                        key={index}
                        className={`flex flex-col gap-2 rounded-md border-2 border-black !p-4 transition-all duration-300 ${isOpen ? "bg-white" : "bg-[var(--primary-color)]"
                            }`}
                    >
                        <div
                            className={`flex items-center justify-between cursor-pointer !p-4 ${isOpen ? "border-b-2 border-black" : ""
                                }`}
                            onClick={() => toggleQuestion(index)}
                        >
                            <h3
                                className="font-bold text-[1rem]"
                                style={{ fontFamily: "var(--font-raleway)" }}
                            >
                                {item.question}
                            </h3>
                            <nav className="border-2  border-black rounded-md !p-2 bg-white hover:bg-gray-100 transition-colors duration-200">
                                {isOpen ? <AiOutlineMinus size={15} /> : <AiOutlinePlus size={15} />}
                            </nav>
                        </div>
                        {isOpen && (
                            <p className="text-[.9rem]  text-justify text-[#333333] transition-all duration-300">
                                {item.answer}
                            </p>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Questions;
