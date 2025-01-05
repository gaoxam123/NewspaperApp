export function sortByBest(reviews) {
    let newReviews = [...reviews]
    newReviews.sort((a, b) => (a.stars < b.stars ? 1 : -1))
    return newReviews
}

export function sortByWorst(reviews) {
    let newReviews = [...reviews]
    newReviews.sort((a, b) => (a.stars > b.stars ? 1 : -1))
    return newReviews
}

export function sortByRelevance(reviews) {
    let newReviews = [...reviews]
    newReviews.sort((a, b) => {
        if (a.numThumpUp < b.numThumpUp) {
            return 1
        }
        else if (a.numThumpUp > b.numThumpUp) {
            return -1
        }
        else {
            if (a.numThumpDown < b.numThumpDown) {
                return 1
            }
            else {
                return -1
            }
        }
    })
    return newReviews
}

export function sortByNewest(reviews) {
    let newReviews = [...reviews]
    newReviews.sort((a, b) => (a.date < b.date ? 1 : -1))
    return newReviews
}