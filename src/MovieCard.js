import React from "react";

function MovieCard({ data }) {
    return (
        <div className="card">
            <div className="card-img-container">
                <img
                    className="card--image"
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${data.poster_path}`}
                    alt={data.title + " poster"}
                />
            </div>
            <p className="card--rating">
                <small>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.61958 1.17082C6.73932 0.802295 7.26068 0.802296 7.38042 1.17082L8.70631 5.25147C8.75986 5.41628 8.91344 5.52786 9.08673 5.52786H13.3774C13.7649 5.52786 13.926 6.02371 13.6125 6.25147L10.1413 8.77345C10.0011 8.87531 9.94243 9.05586 9.99598 9.22067L11.3219 13.3013C11.4416 13.6698 11.0198 13.9763 10.7063 13.7485L7.23511 11.2265C7.09492 11.1247 6.90508 11.1247 6.76489 11.2265L3.29368 13.7485C2.98019 13.9763 2.5584 13.6698 2.67814 13.3013L4.00402 9.22067C4.05757 9.05586 3.99891 8.87531 3.85872 8.77345L0.387506 6.25147C0.0740204 6.02371 0.235132 5.52786 0.622621 5.52786H4.91327C5.08656 5.52786 5.24014 5.41628 5.29369 5.25147L6.61958 1.17082Z"
                            fill="white"
                        />
                    </svg>

                    {data.vote_average}
                </small>
            </p>
            <div className="card--content">
                <h3 className="card--title">{data.original_title}</h3>
                <p>
                    <small>RELEASE DATE: {data.release_date}</small>
                </p>
                <p className="card--desc">{data.overview}</p>
            </div>
        </div>
    );
}

export default MovieCard;
