import { useQuery } from "@tanstack/react-query";
import { getUserAlmbums } from "../utils/apiUserAlbums";

export function useAlbums(userId) {
    return useQuery({
        queryKey: ["albums", userId],
        queryFn: () => getUserAlmbums(userId),
        enabled: !!userId,
    });
}
