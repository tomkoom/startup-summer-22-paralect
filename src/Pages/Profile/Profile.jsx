import React from "react";
import css from "./Profile.module.css";
import ReactPaginate from "react-paginate";

// icons
import { iUserFriends, iUser, iAngleLeft, iAngleRight, iTimesCircle } from "../../Icons/Icons";

// components
import { Loader } from "../../Components";

const Profile = ({ userData, repos, loading, handlePageClick, perPage }) => {
	const pageCount = Math.ceil(userData.public_repos / perPage);

	return (
		<div>
			{loading ? (
				<Loader />
			) : (
				<div className={css.profile}>
					<div className={css.profileInfo}>
						{/* main info */}
						<div className={css.mainInfo}>
							{userData.avatar_url && (
								<img
									className={css.avatar}
									src={userData.avatar_url}
									alt={`${userData.username} avatar`}
								/>
							)}
							{userData.name && <h2>{userData.name}</h2>}
							{userData.username && (
								<a
									className={css.username}
									href={userData.htmlURL}
									target="_blank"
									rel="noreferrer noopener"
								>
									{userData.username}
								</a>
							)}
						</div>

						{/* secondary info */}
						<ul className={css.secondaryInfo}>
							<li>
								<span className={css.icon}>{iUserFriends}</span> {userData.followers} followers
							</li>
							<li>
								<span className={css.icon}>{iUser}</span> {userData.following} following
							</li>
						</ul>
					</div>

					{/* repos */}
					{repos && repos.length > 0 ? (
						<div className={css.repos}>
							<h1>Repositories &#40;{userData.public_repos}&#41;</h1>
							<ul className={css.reposLi}>
								{repos &&
									repos.map((repo) => (
										<li className={css.reposLiI} key={repo.id}>
											<a href={repo.html_url} target="_blank" rel="noreferrer noopener">
												<h3>{repo.name}</h3>
											</a>
											<p className={css.repoDescription}>{repo.description}</p>
										</li>
									))}
							</ul>

							{userData && (
								<ReactPaginate
									previousLabel={iAngleLeft}
									breakLabel="..."
									nextLabel={iAngleRight}
									onPageChange={handlePageClick}
									pageRangeDisplayed={3}
									pageCount={pageCount}
									renderOnZeroPageCount={null}
									// styles
									containerClassName={css.pagination}
									pageClassName={css.pageLiI}
									pageLinkClassName={css.pageNum}
									previousLinkClassName={css.prev}
									breakLinkClassName={css.break}
									nextLinkClassName={css.next}
									activeLinkClassName={css.activePage}
								/>
							)}
						</div>
					) : (
						<div className={css.noRepos}>
							<span>{iTimesCircle}</span>
							<p>Repository list is empty</p>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default Profile;
