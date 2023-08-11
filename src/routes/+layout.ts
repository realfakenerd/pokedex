import type { LayoutLoad } from "./$types"

export const load = (({url}) => {
    return {
        currentPath: url.pathname
    }
}) satisfies LayoutLoad