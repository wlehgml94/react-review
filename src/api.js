export async function getReviews(){
    const response = await fetch('https://learn.codeit.kr/9408/film-reviews/')
    const body = await response.json();
    return body;
}