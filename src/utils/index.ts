import { months } from "@/constants";

export function cn(...cns: string[]) {
    return cns.filter(Boolean).join(" ");
}

export function formatDate(date: string) {
    const [year, month, days] = date.split("-");
    return `${months[Number(month)]} ${days}, ${year}`
}