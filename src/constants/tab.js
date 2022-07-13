import LearnCardsContainer from "../components/content/learn-card/LearnCardsContainer";
import MultipleChoiceContainer from "../components/content/multiple-choice/MultipleChoiceContainer";
import WritingContainer from "../components/content/writing/WritingContainer";
import ExamContainer from "../components/content/exam/ExamContainer";
import ChartContainer from "../components/content/chart/ChartContainer";
import RememberRateContainer from "../components/content/remember-rate/RememberRateContainer";

const tabs = [
    {
        name: "Learn flashcards",
        type: "LEARN",
        icon: ["fas fa-square","far fa-square ic-card-rear"],
        show: () => <LearnCardsContainer/>,
        id: 1,
    },
    {
        name: "Multiple-choice",
        type: "LEARN",
        icon: ["fas fa-check-circle"],
        show: () => <MultipleChoiceContainer/>,
        id: 2,
    },
    {
        name: "Writing",
        type: "LEARN",
        icon: ["fas fa-pencil-alt"],
        show: () => <WritingContainer/>,
        id: 3,
    },
    {
        name: "Listening",
        type: "LEARN",
        icon: ["fas fa-volume-up"],
        show: () => null,
        id: 4,
    },
    {
        name: "Exam",
        type: "LEARN",
        icon: ["fas fa-file-alt","far fa-file-alt ic-card-rear"],
        show: () => <ExamContainer/>,
        id: 5,
    },
    {
        name: "Chart",
        type: "RESULT",
        icon: ["fa fa-line-chart"],
        show: () => <ChartContainer/>,
        id: 6,
    },
    {
        name: "Remember rates",
        type: "RESULT",
        icon: ["fa fa-percent"],
        show: () => <RememberRateContainer/>,
        id: 7,
    },
    {
        name: "Custom flashcards",
        type: "CUSTOM",
        icon: ["fas fa-square"],
        show: () => null,
        id: 8,
    },
];

export default tabs;