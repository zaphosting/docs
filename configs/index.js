/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
    render() {
        const {siteConfig, language = ''} = this.props;
        const {baseUrl, docsUrl} = siteConfig;
        const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
        const langPart = `${language ? `${language}/` : ''}`;
        const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

        const SplashContainer = props => (
            <div className="homeContainer">
                <div className="homeSplashFade">
                    <div className="wrapper homeWrapper">{props.children}</div>
                </div>
            </div>
        );

        const Logo = props => (
            <div className="projectLogo">
                <img src={props.img_src} alt="Project Logo" />
            </div>
        );

        const ProjectTitle = props => (
            <h2 className="projectTitle">
                {props.title}
                <small>{props.tagline}</small>
            </h2>
        );

        const PromoSection = props => (
            <div className="section promoSection">
                <div className="promoRow">
                    <div className="pluginRowBlock">{props.children}</div>
                </div>
            </div>
        );

        const Button = props => (
            <div className="pluginWrapper buttonWrapper">
                <a className="button" href={props.href} target={props.target}>
                    {props.children}
                </a>
            </div>
        );

        return (
            <SplashContainer>
                <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} />
                <div className="inner">
                    <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
                    <PromoSection>
                        <Button href={docUrl('firststeps_register.html')}>Register an Account</Button>
                        <Button href={docUrl('firststeps_rent.html')}>Rent a Server</Button>
                        <Button href={docUrl('firststeps_rent_contractorprepaid.html')}>Contract or Prepaid?</Button>
                    </PromoSection>
                </div>
            </SplashContainer>
        );
    }
}

class Feature extends React.Component {
    render() {
        const {
            title,
            description,
            className='',
            link,
        } = this.props;

        let classes = className;

        return (
            <div className={classes}>
                <a href={link}>
                    <div className="teaser-box">
                        <span className="title">{title}</span>
                        <span className="description">{description}</span>
                    </div>
                </a>
            </div>
        );
    }
}

class Index extends React.Component {
    render() {
        const {config: siteConfig, language = ''} = this.props;
        const {baseUrl, docsUrl} = siteConfig;
        const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
        const langPart = `${language ? `${language}/` : ''}`;
        const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

        return (
            <div>
                <HomeSplash siteConfig={siteConfig} language={language} />
                <Container className="mainContainer">
                    <div className={'spaced-row'}>
                        <Feature className={'item'} title={'❔ FAQ'} link={docUrl('firststeps_register.html')} description={'Get answers to frequently asked questions.'} />
                        <Feature className={'item'} title={'❔ FAQ'} link={docUrl('firststeps_register.html')} description={'Get answers to frequently asked questions.'} />
                    </div>
                </Container>
            </div>
        );
    }
}

module.exports = Index;
