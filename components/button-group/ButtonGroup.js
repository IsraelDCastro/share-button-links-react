import React from 'react';
import PropTypes from 'prop-types';
import {
	CopyIcon,
	EmailIcon,
	FacebookIcon,
	LinkedInIcon,
	PinterestIcon,
	PocketIcon,
	RedditIcon,
	TelegramIcon,
	TumblrIcon,
	TwitterIcon,
	WhatsappIcon
} from "../icons";

ButtonGroup.propTypes = {
	url: PropTypes.string.isRequired,
	title: PropTypes.string,
	message: PropTypes.string,
	content: PropTypes.string,
	description: PropTypes.string,
	mediaUrl: PropTypes.string,
	to: PropTypes.string,
	subject: PropTypes.string,
	isRounded: PropTypes.bool,
	facebookIcon: PropTypes.bool,
	whatsappIcon: PropTypes.bool,
	telegramIcon: PropTypes.bool,
	twitterIcon: PropTypes.bool,
	linkedInIcon: PropTypes.bool,
	redditIcon: PropTypes.bool,
	pinterestIcon: PropTypes.bool,
	tumblrIcon: PropTypes.bool,
	pocketIcon: PropTypes.bool,
	emailIcon: PropTypes.bool,
	copyIcon: PropTypes.bool
}

ButtonGroup.defaultProps = {
	url: "#!",
	title: '',
	message: '',
	content: '',
	description: '',
	mediaUrl: '',
	to: '',
	subject: '',
	isRounded: false,
	facebookIcon: false,
	whatsappIcon: false,
	telegramIcon: false,
	twitterIcon: false,
	linkedInIcon: false,
	redditIcon: false,
	pinterestIcon: false,
	tumblrIcon: false,
	pocketIcon: false,
	emailIcon: false,
	copyIcon: false
}

export default function ButtonGroup ({
			title, message, description, mediaUrl, content, to, subject,  url, isRounded,
			facebookIcon, whatsappIcon, telegramIcon, twitterIcon, linkedInIcon, redditIcon, pinterestIcon, tumblrIcon, pocketIcon, emailIcon, copyIcon
		}) {
	return (
		<ul className="btn-link-group">
			{ facebookIcon && (
				<li>
					<FacebookIcon
						isRounded={ isRounded }
						title={ title }
						url={ url }
					/>
				</li>
			)}
			{ whatsappIcon && (
				<li>
					<WhatsappIcon
						isRounded={ isRounded }
						message={ message }
						url={ url }
					/>
				</li>
			)}
			{ telegramIcon && (
				<li>
					<TelegramIcon
						isRounded={ isRounded }
						message={ message }
						url={ url }
					/>
				</li>
			)}
			{ twitterIcon && (
				<li>
					<TwitterIcon
						isRounded={ isRounded }
						title={ title }
						url={ url }
					/>
				</li>
			)}
			{ linkedInIcon && (
				<li>
					<LinkedInIcon
						isRounded={ isRounded }
						url={ url }
					/>
				</li>
			)}
			{ redditIcon && (
				<li>
					<RedditIcon
						isRounded={ isRounded }
						title={ title }
						url={ url }
					/>
				</li>
			)}
			{ pinterestIcon && (
				<li>
					<PinterestIcon
						isRounded={ isRounded }
						description={ description }
						mediaUrl={ mediaUrl }
						url={ url }
					/>
				</li>
			)}
			{ tumblrIcon && (
				<li>
					<TumblrIcon
						isRounded={ isRounded }
						title={ title }
						content={ content }
						url={ url }
					/>
				</li>
			)}
			{ pocketIcon && (
				<li>
					<PocketIcon
						isRounded={ isRounded }
						title={ title }
						url={ url }
					/>
				</li>
			)}
			{ emailIcon && (
				<li>
					<EmailIcon
						isRounded={ isRounded }
						to={ to }
						subject={ subject }
						content={ content }
						url={ url }
					/>
				</li>
			)}
			{ copyIcon && (
				<li>
					<CopyIcon
						isRounded={ isRounded }
						url={ url }
					/>
				</li>
			)}
		</ul>
	)
}